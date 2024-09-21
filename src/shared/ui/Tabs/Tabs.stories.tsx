import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList } from '.';

const meta: Meta<typeof Tabs> = {
    component: Tabs,
    title: 'Components/Tabs',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

const TabListProps = {
    tabs: [
        { disabled: false, title: "Tabs1", value: "Tabs1" },
        { disabled: false, title: "Tabs2", value: "Tabs2" },
        { disabled: false, title: "Tabs3", value: "Tabs3" },
        { disabled: false, title: "Tabs4", value: "Tabs4" },
    ],
    fullWidth: false
}

export default meta;
type Story = StoryObj<typeof Tabs> & StoryObj<typeof TabListProps>;

export const Story: Story = {
    name: 'Tabs',
    argTypes: {
        fullWidth: {
            table: {
                defaultValue: { summary: 'false' },
            },
        },
    },
    args: {
        tabs: [
            { disabled: false, title: "Tabs1", value: "Tabs1" },
            { disabled: false, title: "Tabs2", value: "Tabs2" },
            { disabled: false, title: "Tabs3", value: "Tabs3" },
            { disabled: false, title: "Tabs4", value: "Tabs4" },
        ],
        fullWidth: false
    },
    render: (args: any) => {
        return <div className='max-w-[955px] w-[920px]'>
            <Tabs defaultValue={args.tabs[0].value}>
                <TabsList tabs={args.tabs} {...args} />

                <TabsContent value={args.tabs[0].value}>Content {args.tabs[0].title}</TabsContent>
                <TabsContent value={args.tabs[1].value}>Content {args.tabs[1].title}</TabsContent>
                <TabsContent value={args.tabs[2].value}>Content {args.tabs[2].title}</TabsContent>
                <TabsContent value={args.tabs[3].value}>Content {args.tabs[3].title}</TabsContent>
            </Tabs>
        </div>
    }
};

export const FullWidth: Story = {
    args: {
        tabs: [
            { disabled: false, title: "Tabs1", value: "Tabs1" },
            { disabled: false, title: "Tabs2", value: "Tabs2" },
            { disabled: false, title: "Tabs3", value: "Tabs3" },
            { disabled: false, title: "Tabs4", value: "Tabs4" },
        ],
        fullWidth: true
    },
    render: (args: any) => {
        return <div className='max-w-[955px] w-[920px]'>
            <Tabs defaultValue={args.tabs[0].value}>
                <TabsList tabs={args.tabs} {...args} />

                <TabsContent value={args.tabs[0].value}>Content {args.tabs[0].title}</TabsContent>
                <TabsContent value={args.tabs[1].value}>Content {args.tabs[1].title}</TabsContent>
                <TabsContent value={args.tabs[2].value}>Content {args.tabs[2].title}</TabsContent>
                <TabsContent value={args.tabs[3].value}>Content {args.tabs[3].title}</TabsContent>
            </Tabs>
        </div>
    }
};

export const DisabledTabs: Story = {
    args: {
        tabs: [
            { disabled: true, title: "Tabs1", value: "Tabs1" },
            { disabled: true, title: "Tabs2", value: "Tabs2" },
            { disabled: true, title: "Tabs3", value: "Tabs3" },
            { disabled: true, title: "Tabs4", value: "Tabs4" },
        ],
        fullWidth: false
    },
    render: (args: any) => {
        return <div className='max-w-[955px] w-[920px]'>
            <Tabs defaultValue={args.tabs[0].value}>
                <TabsList tabs={args.tabs} {...args} />

                <TabsContent value={args.tabs[0].value}>Content {args.tabs[0].title}</TabsContent>
                <TabsContent value={args.tabs[1].value}>Content {args.tabs[1].title}</TabsContent>
                <TabsContent value={args.tabs[2].value}>Content {args.tabs[2].title}</TabsContent>
                <TabsContent value={args.tabs[3].value}>Content {args.tabs[3].title}</TabsContent>
            </Tabs>
        </div>
    }
};