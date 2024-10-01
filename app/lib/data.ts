import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getUsers() {
    const users = await prisma.user.findMany() // Alle Benutzer abfragen
    return {
        props: { users }, // Die Daten werden als props an die Komponente übergeben
    }
}