export const hasPermission = (permissions, key) => {
  return Array.isArray(permissions) && permissions.includes(key);
};
