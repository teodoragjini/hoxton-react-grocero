import StoreItem from "./StoreItem";

export function Header(){
    return(
        <header id="store">
        <h1>Grocero</h1>
        <ul className="item-list store--item-list">
            <StoreItem />         
        </ul>
      </header>
    )
}