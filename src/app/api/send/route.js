import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json(); // Recebe os dados do formulário como JSON

    const { firstName, lastName, email, phoneNumber, description,joinNewsletter } = formData;

    const { data, error } = await resend.emails.send({
      from: `${firstName} <${email}>`,
      to: 'sm@whatflowsyou.com',
      subject: `New Contact: ${firstName} ${lastName}`,
      html: `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Newsletter:</strong> ${joinNewsletter}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
