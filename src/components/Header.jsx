import s from "./Header.module.css"

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    let date = new Date().getDate();
    let month = new Date().getMonth();
    let monthName = monthNames[month]

const Header = () => {
    return <h2 className={s.header}>My tasks for: <span className={s.inline}>{date} {monthName}</span></h2>
}

export default Header;