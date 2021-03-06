import './WeatherDate.css'

const WeatherDate = props => {

    const date = () => {
        const now = new Date()
        const dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
        const monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro"]
        return (
            <div>
                <p className="Date">
                    {dayName[now.getDay()]} {now.getDate()} <br />
                    {monName[now.getMonth()]}
                </p>
            </div>
        )
    }

    return (
        <>
            {date()}
        </>
    )
}

export default WeatherDate
