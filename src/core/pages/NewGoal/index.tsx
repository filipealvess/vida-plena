import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import AreaIcon from "@/components/Icon/Area";
import styles from "@/core/pages/NewGoal/styles.module.css";
import Button from "@/components/Form/Button";
import Input from "@/components/Form/Input";
import Divider from "@/components/Divider";
import { formatDate } from "@/utils/dates";
import storage from "@/modules/storage";
import { checkArea } from "@/utils/areas";

import { Types } from "@/constants/areas/index.d";
import { IChecklist, IChecklistById } from "@/core/pages/NewGoal/index.d";

function NewGoalPage() {
    const [name, setName] = useState('');
    const [endDate, setEndDate] = useState(formatDate(new Date().toISOString(), '-', 'en'));
    const [checklist, setChecklist] = useState<IChecklistById>({});

    const nameRef = useRef<HTMLInputElement>(null);
    const params = useParams();
    const navigate = useNavigate();

    const hasEmptyItem = Object.values(checklist).find((item: IChecklist) => (
        item.text === ''
    ));

    function handleChangeChecklist(id: number, text: string) {
        setChecklist(prev => ({
            ...prev,
            [id]: {
                id,
                text,
            },
        }));
    }

    function addItem() {
        if (hasEmptyItem === true) {
            return;
        }

        const ids = Object.keys(checklist);
        let id = 0;

        if (ids.length > 0) {
            id = Number(ids.sort((a, b) => Number(a) < Number(b) ? 1 : -1)[0]) + 1;
        }

        setChecklist(prev => ({
            ...prev,
            [id]: {
                id,
                text: '',
            },
        }));
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const items = {...checklist};

        for (const item in items) {
            if (items[item].text.trim().length === 0) {
                delete items[item];
            }
        }

        storage.goals.add(
            params.area as Types,
            name,
            endDate,
            items,
        );

        navigate(`/metas/${params.area}`, {state: {created: true}});
    }

    useEffect(() => {
        if (checkArea(params.area) === false) {
            navigate("/", { replace: true });
            return;
        }

        nameRef.current?.focus();

        document.title = 'Nova meta - Vida Plena';
    }, [params.area]);

    if (params.area === undefined) {
        return (
            <p>Carregando...</p>
        );
    }

    return (
        <main className={styles.container}>
            <Header
                title='Nova meta'
                backRoute={`/metas/${params.area}`}
                suffix={<AreaIcon area={params.area} />}
            />

            <form className={styles.content} onSubmit={handleSubmit}>
                <Input
                    placeholder="Nome da meta"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    required
                    ref={nameRef}
                />

                <Input
                    placeholder="Data de conclusão"
                    value={endDate}
                    type="date"
                    onChange={({target}) => setEndDate(target.value)}
                    required
                />

                <Divider title="Checklist" className={styles.divider} />

                {Object.values(checklist).map((item: IChecklist) => (
                    <Input
                        key={item.id}
                        placeholder="Nome do item"
                        value={item.text}
                        autoFocus
                        onSubmit={hasEmptyItem ? () => undefined : addItem}
                        onChange={({target}) => (
                            handleChangeChecklist(item.id, target.value)
                        )}
                    />
                ))}

                <Button
                    disabled={hasEmptyItem}
                    onClick={addItem}
                    type="inline"
                >
                    + Adicionar
                </Button>

                <Button
                    htmlType="submit"
                    disabled={(
                        name.trim().length === 0 ||
                        endDate.trim().length === 0
                    )}
                >
                    SALVAR
                </Button>
            </form>
        </main>
    );
}

export default NewGoalPage;
