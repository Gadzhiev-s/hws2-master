import React from 'react'
import s from './Message.module.css'


// нужно создать правильный тип вместо any

export type UserType1 = {
    avatar: string
    name: string
}
export type  MessageType1 = {
    text: string
    time: string
}
type MessagePropsType = {

    message: {

        id: number
        user: UserType1
        message: MessageType1
    }
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img src={props.message.user.avatar}
                     id={'hw1-avatar-' + props.message.id} alt={'аватарка'}
                />

                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}

                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default Message
