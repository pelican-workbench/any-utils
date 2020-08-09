import { includes } from './includes';

/**
 * 获取当前环境
 */
export function fetchEnv(url?: string): string {
  url = url ? url : window.location.href;

  const envs: string[] = ['dev', 'test', 'pre', 'prod'];

  return envs.find((env) => includes(url, env)) || 'prod';
}
