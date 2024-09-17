export function fShowSuccessAlert(message: string) {
    // Обнуляем таймер предыдущего оповещения
    setVtimeout(clearTimeout(vTimeout));

    // Показываем успешное оповещение с таймером
    setIsShow(true);
    setStatus(AlertsStatus.success);
    setMessage(message)
    setVtimeout(setTimeout(() => {
        setIsShow(false);
        setMessage('')
    }, 5500));
}

export function fShowFailedAlert(message: string) {
    // Обнуляем таймер предыдущего оповещения
    setVtimeout(clearTimeout(vTimeout));

    // Показываем оповещение с ошибкой и таймером
    setIsShow(true);
    setStatus(AlertsStatus.success);
    setMessage(message)
    setVtimeout(setTimeout(() => {
        setIsShow(false);
        setMessage('')
    }, 5500));
}