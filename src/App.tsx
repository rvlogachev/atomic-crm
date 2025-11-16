import { CRM } from "@/components/atomic-crm/root/CRM";
import { MailCheck, MailCheckIcon } from "lucide-react";

/**
 * Application entry point
 *
 * Customize Atomic CRM by passing props to the CRM component:
 *  - contactGender
 *  - companySectors
 *  - darkTheme
 *  - dealCategories
 *  - dealPipelineStatuses
 *  - dealStages
 *  - lightTheme
 *  - logo
 *  - noteStatuses
 *  - taskTypes
 *  - title
 * ... as well as all the props accepted by shadcn-admin-kit's <Admin> component.
 *
 * @example
 * const App = () => (
 *    <CRM
 *       logo="./img/logo.png"
 *       title="Acme CRM"
 *    />
 * );
 */

const App = () => (
    <CRM 
        title='SM CRM'
        companySectors={['Металлургия', 'Нефтегаз и химия', 'Логистика и транспорт', 'Склады и e-commerce', 'Ритейл и FMCG', 'Ритейл и FMCG', 'Машиностроение', 'Финансы и страхование', 'Стройка', 'IT и телекоммуникации', 'Образование', 'Медицина и фармацевтика', 'Госсектор', 'Другое']}
        dealCategories={['Имитационная модель', 'Пилот / PoC', 'Цифровой двойник (платформа)', 'Оптимизационный модуль', 'AI-ассистент / чат-бот', 'Дашборды', 'Обучение и тренинги', 'Консалтинг', 'Лицензии и ПО партнёров','Другое']}
        dealPipelineStatuses={['won']}
        dealStages={[
            { value: 'opportunity', label: 'Новый лид' },
            { value: 'first-contact', label: 'Первичный контакт' },
            { value: 'qualification', label: 'Квалификация|сбор требований' },
            { value: 'prepare', label: 'Подготовка предложения' },
            { value: 'proposal-sent', label: 'КП отправлено' },
            { value: 'agree-order', label: 'Переговоры и согласование' },
            { value: 'contract', label: 'Договор / тендер' },
            { value: 'contract', label: 'Проект в работе' },
            { value: 'won', label: 'Закрыта: успешно' },
            { value: 'lost', label: 'Закрыта: неуспешно' },
        ]}
        noteStatuses={[
            { value: 'cold', label: 'Лид', color: '#7dbde8' },
            { value: 'cold', label: 'Потенциальный клиент', color: '#7dd8e8ff' },
            { value: 'cold', label: 'Клиент', color: '#7de8d8ff' },
            { value: 'cold', label: 'Ключевой клиент', color: '#7de8b6ff' },
            { value: 'cold', label: 'Партнёр / интегратор', color: '#96e87dff' },
            { value: 'cold', label: 'Подрядчик / эксперт', color: '#d1e87dff' },
            { value: 'warm', label: 'Тёплый', color: '#e8cb7d' },
            { value: 'hot', label: 'Горячий', color: '#e88b7d' },
        ]}
        taskTypes={['Звонок', 'Email', 'Онлайн-встреча', 'Очная встреча', 'Демонстрация продукта', 'Подготовка КП', 'Документы и договоры', 'Внутреннее обсуждение', 'Обучение клиента', 'Другое']}
    disableTelemetry />
);

export default App;
 