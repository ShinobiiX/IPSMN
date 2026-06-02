"use client"

import { useState, Suspense, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Send, FileText, User, Mail, Phone, GraduationCap, BookOpen } from "lucide-react"

const programmeOptions = [
  { id: 'hse', name: 'Health, Safety and Environment (HSE)' },
  { id: 'safety-tech', name: 'Safety Technology Management' },
  { id: 'env-refugee', name: 'Environmental Management and Refugees Studies' },
  { id: 'logistics', name: 'Logistics and Transport Management' },
  { id: 'peace-conflict', name: 'Environmental Peace and Conflict Resolution' },
];

const membershipOptions = [
  { id: 'graduate', name: 'Graduate Member (GIPSM)' },
  { id: 'associate', name: 'Associate Member (AIPSM)' },
  { id: 'full', name: 'Full Member (MIPSM)' },
  { id: 'fellow', name: 'Fellow (FIPSM)' },
];

const scholarshipOptions = [
  { id: 'merit', name: 'Academic Merit Scholarship' },
  { id: 'need-based', name: 'Financial Assistance Scheme' },
  { id: 'industrial', name: 'Industrial Safety Excellence Scholarship' },
  { id: 'women-safety', name: 'Women in OSH Leadership Grant' },
];

function ApplyFormContent() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    applyType: 'programme' as 'programme' | 'scholarship' | 'membership',
    selection: '',
    qualification: '',
    message: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Synchronize form state with URL parameters
  useEffect(() => {
    const type = searchParams.get('type');
    const id = searchParams.get('id');
    
    setFormData(prev => ({
      ...prev,
      applyType: (type === 'scholarship' || type === 'membership' || type === 'programme') 
        ? (type as 'programme' | 'scholarship' | 'membership') 
        : prev.applyType,
      selection: id || prev.selection
    }));
  }, [searchParams]);

  if (!mounted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center p-20">
        <div className="text-center space-y-4">
          <div className="relative h-12 w-12 mx-auto">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
          <div className="space-y-2">
            <p className="text-xl font-heading font-bold text-primary animate-pulse">Initializing Portal</p>
            <p className="text-muted-foreground text-sm italic">Loading professional application standards...</p>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {formStatus === 'success' ? (
          <Card className="border-0 bg-accent/10 shadow-xl overflow-hidden">
            <div className="h-2 bg-accent w-full" />
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent animate-bounce">
                  <CheckCircle className="h-10 w-10 text-accent-foreground" />
                </div>
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Application Submitted!</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                Thank you for your interest in IPSM Nigeria. Your application has been received and our admissions team will review it shortly.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <Link href="/">Return to Home</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-0 bg-secondary shadow-2xl overflow-hidden transition-all duration-300">
            <div className="bg-primary p-8 md:p-12 text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <FileText className="h-32 w-32 rotate-12" />
              </div>
              <div className="relative z-10">
                <h2 className="font-heading text-3xl font-bold">Enrollment Form</h2>
                <p className="text-primary-foreground/80 mt-4 text-lg">Join the Institute of Proficient Safety Measures.</p>
              </div>
            </div>
            
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2 border-b border-border pb-2">
                    <User className="h-5 w-5" /> Personal Information
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Full Name</label>
                      <Input 
                        required 
                        placeholder="Enter your full name" 
                        className="bg-background" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Email Address</label>
                      <Input 
                        type="email" 
                        required 
                        placeholder="email@example.com" 
                        className="bg-background" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Phone Number</label>
                      <Input 
                        required 
                        placeholder="+234 ..." 
                        className="bg-background" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Highest Qualification</label>
                      <Input 
                        required 
                        placeholder="B.Sc, HND, OND, SSCE..." 
                        className="bg-background" 
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2 border-b border-border pb-2">
                    <BookOpen className="h-5 w-5" /> Application Details
                  </h3>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">Application Type</label>
                      <Select 
                        value={formData.applyType} 
                        onValueChange={(v: 'programme' | 'scholarship' | 'membership') => setFormData({...formData, applyType: v, selection: ''})}
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="programme">Professional Programme</SelectItem>
                          <SelectItem value="membership">Professional Membership</SelectItem>
                          <SelectItem value="scholarship">Scholarship Scheme</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold">
                        {formData.applyType === 'programme' ? 'Choose Course' : formData.applyType === 'membership' ? 'Choose Grade' : 'Choose Scholarship'}
                      </label>
                      <Select 
                        value={formData.selection} 
                        onValueChange={(v) => setFormData({...formData, selection: v})}
                        required
                      >
                        <SelectTrigger className="bg-background">
                          <SelectValue placeholder="Select one..." />
                        </SelectTrigger>
                        <SelectContent>
                          {formData.applyType === 'programme' && programmeOptions.map(opt => (
                            <SelectItem key={opt.id} value={opt.id}>{opt.name}</SelectItem>
                          ))}
                          {formData.applyType === 'membership' && membershipOptions.map(opt => (
                            <SelectItem key={opt.id} value={opt.id}>{opt.name}</SelectItem>
                          ))}
                          {formData.applyType === 'scholarship' && scholarshipOptions.map(opt => (
                            <SelectItem key={opt.id} value={opt.id}>{opt.name}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Current Role & Experience</label>
                  <Textarea 
                    placeholder="Briefly describe your professional background..." 
                    rows={4} 
                    className="bg-background resize-none" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-lg font-bold shadow-lg">
                  Submit Application
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h1 className="font-heading text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl mb-6">
              Professional Application
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg md:text-xl">
              Advance your career with Nigeria's premier community of safety professionals.
            </p>
          </div>
        </div>
        <Suspense fallback={<div className="p-20 text-center">Initializing Portal...</div>}>
          <ApplyFormContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}