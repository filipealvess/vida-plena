import { Languages } from '@/utils/dates.d';

function formatDate(
    iso: string,
    divider = '/',
    language: Languages = 'pt-BR',
) {
    const date = new Date(iso);
    let day: string | number = date.getDate();
    let month: string | number = date.getMonth() + 1;
    const year = date.getFullYear();

    if (day < 10) {
        day = `0${day}`;
    }

    if (month < 10) {
        month = `0${month}`;
    }

    if (language === 'en') {
        return `${year}${divider}${month}${divider}${day}`;
    }

    return `${day}${divider}${month}${divider}${year}`;
}

function enToDate(enDate: string) {
    const [year, month, day] = enDate.split('-');

    return new Date(Number(year), Number(month) - 1, Number(day));
}

function enToPtBr(enDate: string) {
    const date = enToDate(enDate);

    return formatDate(date.toISOString());
}

export {
    formatDate,
    enToDate,
    enToPtBr,
};
