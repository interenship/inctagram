// Динамически импортируем все иконки из указанной папки
const iconModules = require.context("@/shared/assets/icons/components", false, /\.tsx$/);

// Создаем объект, содержащий все иконки
export const icons = iconModules.keys().reduce((acc: any, path: string) => {
  const iconName = path.replace("./", "").replace(".tsx", ""); // Извлекаем имя файла
  if (acc[iconName] !== "index") acc[iconName] = iconModules(path).default; // Сохраняем компонент в объекте
  return acc;
}, {});
