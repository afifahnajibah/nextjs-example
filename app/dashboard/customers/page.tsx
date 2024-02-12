import CustomersTable from "@/app/ui/customers/table"
import '@/app/ui/global.css'

export default function Customers() {
    return (
    <>
        <p>This is Customers Pager</p>
        <CustomersTable customers={[]}/>
    </>
    )
    
}