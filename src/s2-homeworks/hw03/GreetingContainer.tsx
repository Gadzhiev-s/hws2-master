import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<string> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (name: string) => void) => {
    if (name==='1'){
        setName('')
        setError('')
        addUserCallback('semen')
    }
     else if  (name ==='')  {
         setName('')
        setError('Ошибка! Введите имя!')}
     else  {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnBlur = (name: string, setError: any) => {
    if (name === '') {
        setError('Ошибка! Введите имя!')
    }
    if (name === '    ') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e:any, addUser: any) => {
    if (e.key === 'Enter') {
        addUser()
    }

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent) => { // need to fix any
        setName('name') // need to fix

        error && setError('Ошибка! Введите имя!')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = 0 // need to fix
    const lastUserName = 'Semen Gadzhiev' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
