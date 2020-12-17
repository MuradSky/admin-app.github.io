import React from 'react';

const UserTable = (props) => (
    <>
        <table>
            <thead>
                <tr>
                    <th>Эл. адрес</th>
                    <th>Телефон</th>
                    <th>Пользователи</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{user.tel}</td>
                            <td>{user.user}</td>
                            <td>{user.status}</td>
                            <td>
                                <button className="button muted-button form__btn _first"
                                    onClick={()=> {props.editUser(user)}}
                                >Редактировать</button>
                                <button className="button muted-button form__btn"
                                    onClick={()=> props.deleteUser(user.id)}
                                >Удалить</button>
                            </td>
                        </tr>
                    ))
                    
                ) : (
                    <tr>
                        <td colSpan={3}>Нет пользователей</td>
                    </tr>
                )

                }
            </tbody>
        </table>
    </>
)

export default UserTable;