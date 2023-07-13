'use client'

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit} = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[600px]">
        <CardHeader>
          <CardTitle>The BearClopediaAI</CardTitle>
          <CardDescription>Ask something to the bear</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
          { messages.map(message => {
            return (
              <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                {message.role === 'user' && (
                  <Avatar>
                  <AvatarFallback>DA</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/83662512?s=200&v=4"></AvatarImage>
                </Avatar>
                )}

                {message.role === 'assistant' && (
                  <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://avatars.githubusercontent.com/u/65192718?v=4"></AvatarImage>
                </Avatar>
                )}
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-800">{message.role === 'user' ? "User" : "AI"} :</span>
                  {message.content}
                </p>
              </div>
            )
          })}
          </ScrollArea>
        </CardContent>
        <CardFooter >
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
            <Button type="submit">Submit</Button>
          </form>
          
        </CardFooter>
      </Card>
  )
}