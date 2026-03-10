#!/usr/bin/env bash
# Common helpers shared by daemon.sh, doctor.sh, and install-codex.sh.
# Source this file: source "$(dirname "$0")/lib/common.sh"

# Resolve SKILL_DIR to the project root (parent of scripts/).
resolve_skill_dir() {
  cd "$(dirname "${BASH_SOURCE[1]:-$0}")/.." && pwd
}

# Read a value from config.env by key name.
# Usage: get_config_value "CTI_RUNTIME"
get_config_value() {
  local key="$1"
  local config="${CTI_HOME:-$HOME/.claude-to-im}/config.env"
  grep "^${key}=" "$config" 2>/dev/null | head -1 | cut -d= -f2- | sed "s/^[\"']//;s/[\"']$//"
}

# Check if a PID is alive.
check_pid_alive() {
  local pid="$1"
  [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null
}
