import { NextRequest, NextResponse } from "next/server"

const N8N_WEBHOOK = "https://api.mileadflow.com/webhook/hersec-lead"

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, message: "Payload inválido" }, { status: 400 })
  }

  try {
    const upstream = await fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    })

    const data: { success?: boolean; message?: string } | null = await upstream
      .json()
      .catch(() => null)

    if (!upstream.ok) {
      return NextResponse.json(
        { success: false, message: data?.message ?? "Error del servidor" },
        { status: upstream.status }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, message: "No se pudo contactar el servidor" }, { status: 502 })
  }
}
