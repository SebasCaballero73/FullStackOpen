import React from 'react'

const Notification = ({ message }) => {
    if(message.content === null){
        return null
    }
    else{
        const styles = {
            color: message.type === 'Good' ? '#218380' : "#8F2D56",
            fontStyle: 'italic',
            fontSize: 20,
            border: `5px solid ${message.type === 'Good' ? '#218380' : "#8F2D56"}`,
            borderRadius: '15px',
            padding: '10px',
            textAlign: 'center',
            backgroundColor: '#cae9ff'
        }
        
        return (
            <div style={styles}>
                {message.content}
            </div>
        )
    }
    
}

export default Notification