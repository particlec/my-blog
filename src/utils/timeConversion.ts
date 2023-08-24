import dayjs from 'dayjs';

/**
 * 按模板格式化时间戳
 *
 * @param timestamp 待格式化的时间戳
 * @param template  格式化模板
 */
export const formatTimestamp = (
  timestamp: number | string,
  template = 'YYYY-MM-DD HH:mm:ss'
): string => {
  return dayjs(timestamp).format(template);
};

export default {
  formatTimestamp,
};
