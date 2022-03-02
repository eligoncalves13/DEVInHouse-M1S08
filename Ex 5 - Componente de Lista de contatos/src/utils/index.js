export function settingStatusBg(status) {
    const statusColor = {
      'online': '#21b82e',
      'busy': '#c4b424',
      'offline': '#b82121'
    }
    return statusColor[status];
  }