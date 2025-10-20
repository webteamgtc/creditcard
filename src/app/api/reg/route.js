import { NextResponse } from 'next/server';

export async function POST(req) {
    const {
        email,
        username,
        code,
        country,
        phone,
        password,
        server_id,
        // username
    } = await req.json();

    try {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('code', code);
        formData.append('country', country);
        formData.append('phone', phone);
        formData.append('password', password);
        // formData.append('username', username);
        formData.append('server_id', server_id);

        const response = await fetch('https://m.mygtc.app/api/pub/reg', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        console.log({ data })
        if (data?.code == 0) {
            return NextResponse.json({ success: true, message: data?.message }, { status: 200 });
        }
        else {
            return NextResponse.json({ success: true, message: data?.message }, { status: 400 });

        }

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: error?.message || 'Unknown error',
            },
            { status: 200 }
        );
    }
}
