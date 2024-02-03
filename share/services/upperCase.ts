export function UpperCase(name: string | undefined): string {
    if (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    } else {
        return "";
    }
}
