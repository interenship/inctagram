import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '.';

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const aTabs = ["Tabs1", "Tabs2", "Tabs3", "Tabs4"];

export const Story: Story = {
    name: 'Tabs',
    render: () => {
        return <div className='max-w-[955px] w-[920px]'>
            <Tabs defaultValue={aTabs[0]}>
                <TabsList>
                    {aTabs.map((tab) => {
                        return <TabsTrigger value={tab} key={tab}>{tab}</TabsTrigger>
                    })}
                </TabsList>

                <TabsContent value={aTabs[0]}>Content {aTabs[0]}</TabsContent>
                <TabsContent value={aTabs[1]}>Content {aTabs[1]}</TabsContent>
                <TabsContent value={aTabs[2]}>Content {aTabs[2]}</TabsContent>
                <TabsContent value={aTabs[3]}>Content {aTabs[3]}</TabsContent>
            </Tabs>
        </div>
    }
};

export const DisabledTabs: Story = {
    render: () => {
        return <div className='max-w-[955px] w-[920px]'>
            <Tabs defaultValue={aTabs[0]}>
                <TabsList>
                    {aTabs.map((tab) => {
                        return <TabsTrigger value={tab} key={tab} disabled>{tab}</TabsTrigger>
                    })}
                </TabsList>

                <TabsContent value={aTabs[0]}>Content {aTabs[0]}</TabsContent>
                <TabsContent value={aTabs[1]}>Content {aTabs[1]}</TabsContent>
                <TabsContent value={aTabs[2]}>Content {aTabs[2]}</TabsContent>
                <TabsContent value={aTabs[3]}>Content {aTabs[3]}</TabsContent>
            </Tabs>
        </div>
    }
};