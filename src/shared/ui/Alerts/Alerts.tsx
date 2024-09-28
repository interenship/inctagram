import { cn } from '@/features/utils/cn';
import React, { useState } from 'react';
import { Typography } from '../Typography';
import { Close } from '@/shared/assets/icons/components';

export enum AlertsStatus {
    success = "success",
    failed = 'failed'
}

export interface AlertsProps {
    isShow: boolean;
    message: string;
    status: AlertsStatus;
}

export const Alerts = (props: AlertsProps) => {
    const [isShow, setIsShow] = useState(props.isShow);
    const [message, setMessage] = useState(props.message);
    const [vTimeout, setVtimeout] = useState<any>(null);
    const [status, setStatus] = useState<AlertsStatus>(props.status);

    // TODO перенести в ts с использованием redux
    function fShowSuccessAlert(message: string) {
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
    
    // TODO перенести в ts с использованием redux
    function fShowFailedAlert(message: string) {
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

    // Паузка выключение оповещения при наведении
    function fPauseTimer() {
        setVtimeout(clearTimeout(vTimeout));
    }

    // Возобновление оповещения
    function fReturnTimer() {
        setVtimeout(setTimeout(() => {
            setIsShow(false);
            setMessage('')
        }, 1500));
    }

    return (
        <>
            {isShow &&
                <div
                    className={
                        cn('min-w-[390px] max-w-[800px] h=[50px] rounded-sm px-6 py-3 flex justify-between gap-[10px]',
                            status === AlertsStatus.success && 'border border-solid border-success-500 bg-success-900',
                            status === AlertsStatus.failed && 'border border-solid border-danger-500 bg-danger-900'
                        )
                    }
                    onMouseEnter={fPauseTimer}
                    onMouseLeave={fReturnTimer}
                >
                    <div className="text-white flex gap-[5px] max-w-[95%]">
                        {status === AlertsStatus.success && <Typography.BOLD16>SUCCESS!</Typography.BOLD16>}
                        {status === AlertsStatus.failed && <Typography.BOLD16>ERROR!</Typography.BOLD16>}

                        <Typography.REGULAR16>{message}</Typography.REGULAR16>
                    </div>

                    <Close fill='#fff' className='cursor-pointer' />
                </div>}
        </>
    );
};