import React from 'react';

// Style
import './about.css'

const About = () => {

    

    return (
        <article className="about">
            <div className="col col-left">
                <h1>About</h1>

                <p>This App allows you to select and categorize books you are currently reading, want to read,
                    or have read. You will be able to change a book status anytime, as well as add new titles
                    to your collection or remove items from your library. It also includes a search function
                    to add additional books.</p>

                

                
            </div>

            <div className="col col-right">
            <h3>Search Terms</h3>
            <p>For searching books, only some specific words are allowed. Here is the complete list:</p>

            <p>'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball',
                'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes',
                'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
                'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
                'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future',
                'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King',
                'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez',
                'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry',
                'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire',
                'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time',
                'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</p>
            </div>
        </article>
    )
}

export default About;