import {prisma} from '@/lib/helpers/prisma'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: Response) {
  const data = await req.formData()
  
  console.log(data)
  
  const email = data.get('email')
  const password = data.get('password')
  const name = data.get('name')
  const phone = data.get('phone')

  if (typeof name !== 'string' ||
      typeof password !== 'string' ||
      typeof email !== 'string' ||
      typeof phone !== 'string' || 
      !email || !password || !name || !phone) {
    return NextResponse.json({ error: 'invalid data', status: 400 })
  }
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
        phone
      }
    })
    return redirect('/')
  } catch (error) {
    NextResponse.json({ error: 'invalid data', status: 400 })
    return redirect('/')
  }
}