interface IListGuest {
    name: string,
    isMember: boolean
}

export function filtterMember(listGuest: IListGuest[]): IListGuest[] {
    return listGuest.filter((value) => value.isMember)
}

export function longestName(listGuest: IListGuest[]): string {
    let longestName: string = '' ;
    listGuest.forEach((value, index) => {
        if(listGuest[index].name.length > longestName.length) {
            longestName = value.name
        }
    });
    return longestName;
}