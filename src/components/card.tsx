interface ICard {
    id: number;
    paragraph: string;
    detail: string
}

export const Card = ( {id, paragraph, detail}: ICard) => {
    return(
        <div>
            <h1>Hello world!! {id}</h1>
            <p>{paragraph}</p>
            <a href="#">{detail}</a>
        </div>
    );  
}