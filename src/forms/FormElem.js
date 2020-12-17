import React from "module";
const FormElem = (props) => {
    const error = {
        borderColor: 'red',
    }
    const font = {
        fontSize: '10px',
        fontFamily: 'Arial',
        color: 'red'
    }
    return (
        <>
            { props.onError ? (
                <p style={font}>Пожалуйста корректно заполните указанные параметры ниже </p>
                ) : null
            }
            <form
            className="form"
            onSubmit={props.onSubmit}
            >
                <label className="form__title">Эл. адрес</label>
                <input 
                    style={ props.onError ? error : null }
                    type="email" 
                    name="email" 
                    value={props.email} 
                    onChange={props.onChange}
                    className="form__input"
                />
                <label className="form__title">Пароль</label>
                <input 
                    style={ props.onError ? error : null }
                    type="password" 
                    name="password" 
                    value={props.password} 
                    onChange={props.onChange}
                    className="form__input" 
                />
                <label className="form__title">Телефон</label>
                <input 
                    style={ props.onError ? error : null }
                    type="tel" 
                    name="tel" 
                    className="form__input" 
                    value={props.tel} 
                    onChange={props.onChange}
                />
                <label className="form__title">Ф.И.О.</label>
                <input style={ props.onError ? error : null }
                    type="text" 
                    name="user" 
                    value={props.user} 
                    onChange={props.onChange} 
                    className="form__input" 
                />
                <label className="form__title">Статус</label>
                { props.onError ? (
                    <p style={font}>Выберите статус пользователя </p>
                    ) : null
                }
                <div className="form__radio" >
                    <div className="form__box">
                        <label htmlFor="client">Клиент</label>
                        <input 
                            id="client"
                            type="radio" 
                            name="status" 
                            className="form__radio"
                            checked={props.onClient}
                            value="Client" onChange={props.onChange}
                        /> 
                    </div>
                    <div className="form__box">
                        <label htmlFor="partner">Партнер</label>
                        <input 
                            id="partner"
                            type="radio" 
                            name="status" 
                            checked={props.onPartner}
                            className="form__radio" 
                            value="Partner" onChange={props.onChange}
                        />
                    </div>
                    <div className="form__box">
                        <label htmlFor="admin">Админ</label>
                        <input 
                            id="admin"
                            type="radio" 
                            name="status"
                            checked={props.onAdmin}
                            className="form__radio" 
                            value="Admin" onChange={props.onChange}
                        /> 
                    </div>
                </div>

                {   props.editing ? (
                    <button className="form__btn _first">Сохранить</button>
                    ) : (
                        <button className="form__btn">Добавить</button>
                    )
                }
                
                {   props.editing ? (
                    <button className="form__btn"
                        onClick={props.onClick}
                    >Отменить</button>
                    ) : null
                }
            </form>
        </>
    )
}

export default FormElem;