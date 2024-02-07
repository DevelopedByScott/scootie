import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function scootie() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F472B6] to-[#EC4899] dark:from-[#2563EB] dark:to-[#3B82F6]">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Meet Scootie</h2>
            <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your friendly virtual assistant. Let&apos;s get things done together.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2 min-[400px]:flex-row">
              <Input
                className="max-w-lg flex-1 bg-white dark:bg-gray-800"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="bg-[#F472B6] text-white dark:bg-[#2563EB] dark:text-white" type="submit">
                Sign Up
              </Button>
            </form>
            <p className="text-xs text-gray-100 dark:text-gray-400">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2 text-white dark:text-gray-400" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#F59E0B] to-[#D97706] dark:from-[#F59E0B] dark:to-[#D97706]">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Services</h2>
            <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let me help you with your tasks. I offer a variety of services to make your life easier.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-white">1. Secretary Work</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Let me handle your emails, calendar, and appointments. I&apos;ll keep you organized and on schedule.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-white">2. Data Entry</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Need help inputting data into spreadsheets or databases? I&apos;ve got you covered. Accurate and efficient
                data entry services.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-white">3. Meeting Setup</h3>
              <p className="text-gray-100 dark:text-gray-400">
                I can schedule your meetings, send out invites, and make sure everyone is on the same page. Let&apos;s have
                productive meetings.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-white">4. Graphic Design</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Need eye-catching graphics for your social media or website? I can create beautiful designs that
                represent your brand.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#34D399] to-[#10B981] dark:from-[#34D399] dark:to-[#10B981]">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Portfolio</h2>
            <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Check out some of my work. I take pride in delivering high-quality results to my clients.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-white">1. Social Media Management</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Created engaging posts and managed interactions for a client&apos;s social media accounts, resulting in
                increased followers and customer engagement.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-white">2. Website Maintenance</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Regularly updated content, fixed bugs, and improved the user experience for a company&apos;s website, leading
                to higher customer satisfaction and retention.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-white">3. Email Marketing Campaigns</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Designed and executed targeted email marketing campaigns for a small business, resulting in increased
                website traffic and conversions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-white">4. Virtual Events Coordination</h3>
              <p className="text-gray-100 dark:text-gray-400">
                Organized and managed virtual events, including webinars and online conferences, ensuring smooth
                operation and participant satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#6EE7B7] to-[#34D399] dark:from-[#6EE7B7] dark:to-[#34D399]">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Blog</h2>
            <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Read my latest insights and tips on productivity, organization, and more.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
            <Card className="w-full bg-white dark:bg-gray-800">
              <CardContent className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Productivity
                </div>
                <CardHeader className="space-y-1">
                  <Link
                    className="text-2xl font-bold hover:underline underline-offset-4 text-[#6EE7B7] dark:text-[#34D399]"
                    href="#"
                  >
                    The Art of Time Management
                  </Link>
                  <p className="text-gray-100 dark:text-gray-400">Tips for making the most of your day.</p>
                </CardHeader>
              </CardContent>
            </Card>
            <Card className="w-full bg-white dark:bg-gray-800">
              <CardContent className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Remote Work
                </div>
                <CardHeader className="space-y-1">
                  <Link
                    className="text-2xl font-bold hover:underline underline-offset-4 text-[#6EE7B7] dark:text-[#34D399]"
                    href="#"
                  >
                    Staying Connected from Afar
                  </Link>
                  <p className="text-gray-100 dark:text-gray-400">The importance of communication in virtual teams.</p>
                </CardHeader>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#FBBF24] to-[#F59E0B] dark:from-[#FBBF24] dark:to-[#F59E0B]">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Contact Scootie</h2>
            <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to work with me? Send me a message and let&apos;s get started.
            </p>
          </div>
          <div className="mx-auto w-full max-[600px] space-y-4">
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label className="text-white" htmlFor="name">
                  Name
                </Label>
                <Input className="bg-white dark:bg-gray-800" id="name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-2">
                <Label className="text-white" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800"
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-white" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  className="bg-white dark:bg-gray-800"
                  id="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <Button className="bg-[#FBBF24] text-white dark:bg-[#F59E0B]" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#10B981] to-[#3B82F6] dark:from-[#10B981] dark:to-[#3B82F6]">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Hire Me</h2>
            <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let&apos;s work together. Tell me about your project and how I can help.
            </p>
          </div>
          <div className="mx-auto w-full max-[600px] space-y-4">
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label className="text-white" htmlFor="name">
                  Name
                </Label>
                <Input className="bg-white dark:bg-gray-800" id="name" placeholder="Enter your name" required />
              </div>
              <div className="grid gap-2">
                <Label className="text-white" htmlFor="email">
                  Email
                </Label>
                <Input
                  className="bg-white dark:bg-gray-800"
                  id="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <Label className="text-white" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  className="bg-white dark:bg-gray-800"
                  id="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <Button className="bg-[#10B981] text-white dark:bg-[#3B82F6]" type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
