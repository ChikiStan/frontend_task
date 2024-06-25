import styles from './FirstTask.module.css'


const FirstTask = () => {

    return <div className={styles.container}>
        <p className={styles.descriprion}>
        Необходимо запросить задачи с сервера, который выслан в чате Dion.<br/>
        после чего отобразить их в компоненте, обновление задач должно происходить раз в 5 секунд.<br/><br/>

        1. Получить авторизационный токен в Swagger<br/>
        2. Найти метод получения всех задач<br/>
        3. Написать код, который запрашивает задачи с сервера раз в 5 секунд, <br/>
        после чего выполняет перерендр компонента, если есть новые задачи<br/>
        4. Компонент должен выводить список задач(<br/>
        в каждой задаче следующие поля: title, descriprion, responsibles, status, priority
    )<br/>
        </p>

    </div>
}

export {FirstTask}