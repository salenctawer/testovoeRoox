
export type ElementsType ={
    id:number
    name: string 
    username:string
    email: string
    address:{
        street: string
        suite:string
        city:string
        zipcode:string
        geo:{
            lat:string
            lng: string
        }
    }
    phone:string
    website: string
    company: {
        name:string
        catchPhrase:string
        bs: string
    }
}

export type EditingElementType ={
    id: number,
    name:string
    userName:string
    email:string
    addressStreet:string
    addressCity:string
    addressZipcode:string
    phone:string
    website:string
}