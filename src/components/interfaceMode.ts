const select = document.getElementById("interface-select");
export let interfaceChoiceValue: string;
export function interfaceChoice(): string {
    console.log("ok")
    if(select) {
        console.log("select exists")
        select.addEventListener("change", (event: Event) => {
            const element = event.currentTarget as HTMLInputElement
            const value = element.value
            return value;
        });
    }
}
