import React from "react";

const Filter = (props) => {
    return (
        <div>
            <div>
                <button 
                    className="form__btn _margin"
                    value="all"
                    onClick={props.onClick}
                >Все</button>
                <button 
                    className="form__btn _margin"
                    value="client"
                    onClick={props.onClick}
                >Клиент</button>
                <button 
                    className="form__btn _margin"
                    value="partner"
                    onClick={props.onClick}
                >Партнер</button>
                <button 
                    className="form__btn _margin"
                    value="admin"
                    onClick={props.onClick}
                >Админ</button>
            </div>
            <input 
                className="form__input"
                type="search" 
                name="search" 
                placeholder="Поиск пользователя по эл. адресу или телефону..."
                onChange={props.handleSearch}
            />
        </div>
    )
}

export default Filter;