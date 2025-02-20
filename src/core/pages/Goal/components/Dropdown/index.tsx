import { useMemo, useState } from 'react';
import BaseDropdown from '@/components/Dropdown';
import Popup from '@/components/Popup';
import { useNavigate } from 'react-router-dom';
import storage from '@/modules/storage';

import {IOption} from '@/components/Dropdown/index.d';
import {IProps} from '@/core/pages/Goal/components/Dropdown/index.d';

function Dropdown({
    goal,
}: IProps) {
    const [popupVisible, setPopupVisible] = useState(false);

    const navigate = useNavigate();

    const options = useMemo<IOption[]>(() => ([
        {
            id: 'update',
            onClick: () => navigate(`/metas/${goal.area}/${goal.id}/atualizar`),
            text: 'Atualizar',
        },
        {
            id: 'delete',
            onClick: () => setPopupVisible(true),
            text: 'Excluir',
            color: 'var(--danger)',
        },
    ]), []);

    function handleDelete() {
        storage.goals.remove(goal.id);

        setPopupVisible(false);
        navigate(`/metas/${goal.area}`, {replace: true});
    }

    return (
        <>
            <BaseDropdown
                options={options}
                icon='more-vertical'
            />

            <Popup
                title='Excluir Meta'
                visible={popupVisible}
                danger
                target='cancel'
                okText='Excluir'
                onCancel={() => setPopupVisible(false)}
                onOk={handleDelete}
            >
                <p>
                    Tem certeza que deseja excluir a meta
                    <strong> {goal.name}</strong>?
                    Esta ação não pode ser desfeita!
                </p>
            </Popup>
        </>
    );
}

export default Dropdown;
