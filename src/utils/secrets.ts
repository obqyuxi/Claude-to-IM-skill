/**
 * Unified secret masking logic.
 *
 * Consolidates the masking implementations previously split between
 * config.ts (simple positional mask) and logger.ts (regex-based).
 */

/** Patterns that match common secret formats in log output. */
const MASK_PATTERNS: RegExp[] = [
  /(?:token|secret|password|api_key|botid|bot_id)["']?\s*[:=]\s*["']?([^\s"',]+)/gi,
  /bot\d+:[A-Za-z0-9_-]{35}/g,
  /Bearer\s+[A-Za-z0-9._-]+/g,
];

/**
 * Mask known secret patterns in free-form text (e.g. log lines).
 * Replaces matched substrings with asterisks, keeping the last 4 chars.
 */
export function maskSecrets(text: string): string {
  let result = text;
  for (const pattern of MASK_PATTERNS) {
    pattern.lastIndex = 0;
    result = result.replace(pattern, (match) => {
      if (match.length <= 4) return match;
      return '*'.repeat(match.length - 4) + match.slice(-4);
    });
  }
  return result;
}

/**
 * Mask a single known-secret value for display.
 * Shows only the last 4 characters.
 */
export function maskSecret(value: string): string {
  if (value.length <= 4) return '****';
  return '*'.repeat(value.length - 4) + value.slice(-4);
}
