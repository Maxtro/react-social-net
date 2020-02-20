import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map( dl => <DialogItem key={dl.id} name={dl.name} id={dl.id} /> ) 
    let messagesElement = props.messagesData.map( ms => <Message key={ms.message} message={ms.message} />   )

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={styles.messages}>
               {messagesElement}
            </div>
            
        </div>
    )
}

export default Dialogs