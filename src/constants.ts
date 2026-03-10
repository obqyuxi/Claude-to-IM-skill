/**
 * Shared constants and type definitions.
 */

// ── Channel Types ──
export type ChannelType = 'telegram' | 'discord' | 'feishu' | 'qq' | 'wecom';

// ── Timeouts ──
export const AUTH_TIMEOUT_MS = 15_000;
export const MOBILE_COMMAND_TIMEOUT_MS = 15_000;
export const PERMISSION_TIMEOUT_MS = 5 * 60 * 1000; // 5 minutes

// ── Limits ──
export const DEDUP_MAX = 1000;
export const MAX_LOG_SIZE = 10 * 1024 * 1024; // 10MB
export const MAX_ROTATED_LOGS = 3;
export const AUDIT_LOG_MAX = 1000;
export const DEDUP_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
