import React, {useState} from 'react';
import '../styles/GroupItems.css'

const GroupItems = ({addStd, group}) => {
    function ListStudents() {
        return (
                group.students.map( (item) => {
                    return (<p key={item.id}>{item.name}</p>);
                    }
                )

        )
    }

    const [nameStudent, setStudent] = useState('');

    function addNewStudent(e){
        e.preventDefault();
        const newStudent = {
            id: Date.now(),
            name:nameStudent,
        }
        addStd(newStudent);
        setStudent('');
    }
    return (
        <div className="group">
            <div className="group__content">
                <div className="group__content__name">
                    {group.title}
                </div>
                <div className="group__content__text">
                    {ListStudents()}
                </div>
            </div>
            <form className={"new-student"}>
                <input className={"input"}
                       value={nameStudent}
                       onChange={e => setStudent(e.target.value)}
                       placeholder={"Иванов Иван Иваныч"}/>
                <button className={"button"}
                        onClick={addNewStudent}
                        type={"submit"}>
                    Добавить
                </button>
            </form>
            <button className={"button"} type="button">Удалить</button>
        </div>
    );
};

export default GroupItems;