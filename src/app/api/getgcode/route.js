import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { email, type } = await req.json();
    try {
        // Forward the request to the actual API
        const response = await axios.post(`https://m.mygtc.app/api/pub/get_code`, { email, type }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response?.status == 200) {
            return NextResponse.json({ message: response?.data?.message, success: true }, { status: 200 })
        }
        else {
            return NextResponse.json({ message: response?.data?.message, success: false }, { status: 400 })

        }

    } catch (error) {
        console.error("Error in proxy:", error);
        return new Response(({ success: false, error }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
