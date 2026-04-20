import { NextResponse } from "next/server";
import { MAX_PARTICIPANTS } from "@/lib/utils";
import { MOCK_CURRENT_PARTICIPANTS, MOCK_TOTAL_COLLECTED_EUR } from "@/lib/mock";

// Mock API — à remplacer par une requête Supabase quand la DB sera branchée.
// GET /api/participants/count
export async function GET() {
  return NextResponse.json({
    current: MOCK_CURRENT_PARTICIPANTS,
    remaining: MAX_PARTICIPANTS - MOCK_CURRENT_PARTICIPANTS,
    max: MAX_PARTICIPANTS,
    totalCollectedEur: MOCK_TOTAL_COLLECTED_EUR,
    updatedAt: new Date().toISOString(),
  });
}
