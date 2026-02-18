import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, X } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useAuth } from "@/hooks/useAuth";

type PeriodEntry = {
  id: string;
  startDate: string; // ISO
  length: number; // days
  symptoms?: string;
  createdAt: string;
};

function calculatePhase(entry: PeriodEntry) {
  // Simple phase calculation: cycle length default 28, phases roughly:
  // Days 1-5: menstrual, 6-12: follicular, 13-15: ovulation, 16-28: luteal
  const cycleLength = entry.length || 28;
  const start = new Date(entry.startDate);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  const dayInCycle = ((diffDays % cycleLength) + cycleLength) % cycleLength + 1;

  if (dayInCycle <= 5) return { phase: "Menstrual", dayInCycle };
  if (dayInCycle <= 12) return { phase: "Follicular", dayInCycle };
  if (dayInCycle <= 15) return { phase: "Ovulation", dayInCycle };
  return { phase: "Luteal", dayInCycle };
}

export default function CheckIns() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<PeriodEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [newStart, setNewStart] = useState<string>(new Date().toISOString().slice(0, 10));
  const [newLength, setNewLength] = useState<number>(28);
  const [newSymptoms, setNewSymptoms] = useState<string>("");

  const storageKey = user ? `spiral_periods_demo_${user.uid}` : `spiral_periods_demo`;

  useEffect(() => {
    // Demo mode: use localStorage
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        setEntries(JSON.parse(raw));
      } else {
        setEntries([]);
      }
    } catch (e) {
      setEntries([]);
    }
    setLoading(false);
  }, [storageKey]);

  useEffect(() => {
    // persist
    if (!loading) {
      localStorage.setItem(storageKey, JSON.stringify(entries));
    }
  }, [entries, loading, storageKey]);

  const handleAddEntry = () => {
    const entry: PeriodEntry = {
      id: String(Date.now()),
      startDate: newStart,
      length: newLength,
      symptoms: newSymptoms,
      createdAt: new Date().toISOString(),
    };
    setEntries([entry, ...entries]);
    setShowAdd(false);
    setNewSymptoms("");
  };

  const formatDate = (iso?: string) => {
    if (!iso) return "Unknown";
    const d = new Date(iso);
    return d.toLocaleDateString();
  };

  if (loading) {
    return (
      <Layout>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Cycle Tracker</h1>
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-500">Loading cycle data...</div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Cycle Tracker</h1>
          <div className="text-sm text-gray-600">{entries.length} recorded cycle{entries.length !== 1 ? 's' : ''}</div>
        </div>

        <div className="mb-6 flex items-center gap-3">
          <Button onClick={() => setShowAdd(true)} className="hubfit-primary">
            <Plus className="w-4 h-4 mr-2" />
            Log Period
          </Button>
          <div className="text-sm text-gray-500">Demo mode: entries stored locally in your browser.</div>
        </div>

        {entries.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No periods logged yet</h3>
              <p className="text-gray-500">Use the "Log Period" button to record a period start date and symptoms.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {entries.map((entry) => {
              const phase = calculatePhase(entry);
              return (
                <Card key={entry.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">Start: {formatDate(entry.startDate)}</CardTitle>
                        <div className="text-sm text-gray-600">Length: {entry.length} days</div>
                      </div>
                      <div className="text-right">
                        <Badge className="capitalize">{phase.phase}</Badge>
                        <div className="text-xs text-gray-500">Day {phase.dayInCycle}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {entry.symptoms ? (
                      <div className="text-sm text-gray-700">Symptoms: {entry.symptoms}</div>
                    ) : (
                      <div className="text-sm text-gray-500">No symptoms recorded</div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Add Period Modal */}
        <Dialog open={showAdd} onOpenChange={setShowAdd}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Log Period</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div>
                <label className="block text-sm text-gray-700">Start Date</label>
                <input type="date" value={newStart} onChange={(e) => setNewStart(e.target.value)} className="mt-2 w-full border rounded p-2" />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Length (days)</label>
                <input type="number" min={20} max={40} value={newLength} onChange={(e) => setNewLength(Number(e.target.value))} className="mt-2 w-full border rounded p-2" />
              </div>
              <div>
                <label className="block text-sm text-gray-700">Symptoms (optional)</label>
                <textarea value={newSymptoms} onChange={(e) => setNewSymptoms(e.target.value)} className="mt-2 w-full border rounded p-2" />
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
                <Button onClick={handleAddEntry} className="hubfit-primary">Save</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}