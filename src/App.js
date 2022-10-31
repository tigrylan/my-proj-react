import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css'
import GroupItems from "./components/GroupItems";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
    const [groups, setGroups] = useState( [{
        id: 1,
        title:"ДМП-41",
        students: [
            {id: 1, name: 'Экажев Хамид'},
            {id: 2, name: 'Нурпейсов Анвар'},
            {id: 3, name: 'Тумачев Серафим'},
            {id: 4, name: 'Ружанский Антон'},
            {id: 5, name: 'Сидоров Сергей'},
            {id: 6, name: 'Орлов Валентин'},
        ]
    },
        {
            id: 2,
            title:"ДМП-31",
            students: [
                {id: 1, name: 'Экажев Хамид'},
                {id: 2, name: 'Нурпейсов Анвар'},
                {id: 3, name: 'Тумачев Серафим'},
                {id: 4, name: 'Ружанский Антон'},
                {id: 5, name: 'Сидоров Сергей'},
                {id: 6, name: 'Орлов Валентин'},
                {id: 7, name: 'Ружанский Антон'},
                {id: 8, name: 'Сидоров Сергей'},
                {id: 9, name: 'Орлов Валентин'},
            ]
        }]
    );
    const addStudent = (newStudent) => {
        newStudent.preventDefault();
        setGroups({
            ...groups,
            students: [...groups.students, newStudent]
        });
    }

    const editStudent= (editStudent) => {
        editStudent.preventDefault();
    }
    function addGroup(e){
        e.preventDefault();
        const newGroup = {
            id: Date.now(),
            title:e.target.value,
            student:[]
        }
        setGroups([...groups, newGroup]);
    }
    const ListGroups  = groups.map( group => {
        return (
            <GroupItems
                key={groups.id}
                addStd={addStudent}
                addGrp={addGroup}
                group={group}
            />
        )
    })

    return (<div className="App">
        <Header/>
        {ListGroups}
        <form className={"new-group"}>
            <input
                value={groups.name}
                type="text"
                onChange={e => setGroups(e.target.value)}
                className={"input"}
                placeholder={"Название группы"}
            />
            <button
                onClick={addGroup}
                className={"button"}
            >
                Добавить группу
            </button>
        </form>
    </div>);
}

export default App;
