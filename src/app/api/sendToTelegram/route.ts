import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://web-production-3cfad.up.railway.app/submit_form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      }
    );

    if (response.ok) {
      return NextResponse.json(
        { message: "Заявка успешно отправлена!" },
        { status: 200 }
      );
    } else {
      const errorText = await response.text();
      console.error("Ошибка сервера:", errorText);
      return NextResponse.json(
        { error: `Ошибка отправки заявки. Код ошибки: ${response.status}` },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера." },
      { status: 500 }
    );
  }
}
