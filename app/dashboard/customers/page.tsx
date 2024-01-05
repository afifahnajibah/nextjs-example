import CustomersTable from "@/app/ui/customers/table"
import '@/app/ui/global.css'

export default function Customers() {
    return (
    <>
        <p>This is Customers Page</p>
        <CustomersTable customers={[]}/>
    </>
    )
    
}