import { EmailTemplate } from '@/components/global/emails/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
	try {
		const data = await resend.emails.send({
			from: 'Acme  <onboarding@resend.dev>',
			to: ['dossantosdevoficial@gmail.com'],
			subject: 'Olá Assinante!',
			text: '',
			react: EmailTemplate({ firstName: 'Juliano' }),
		})
		return NextResponse.json(data)
	} catch (error) {
		return NextResponse.json({ error })
	}
}
