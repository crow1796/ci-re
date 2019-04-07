<template>
    <div class="rounded shadow bg-white text-grey-dark mb-2">
        <div class="flex">
            <div class="p-6">
                LOGO
            </div>
            <div class="flex-grow py-4">
                <div class="font-bold">
                    Name
                </div>
                <div class="link">
                    Link
                </div>
            </div>
            <div class="flex">
                <div class="p-6 cursor-pointer">
                    <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div class="flex" v-if="usable">
                <ci-button text="USE"
                    @click="useAccount"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        account: {
            required: true
        },
        usable: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        useAccount(){
            chrome.tabs.query({
            active: true,
            currentWindow: true
            }, (tabs) => {
                chrome.tabs.sendMessage(tabs[0].id, {event: 'UseAccountEvent', data: {
                    account: this.account
                }}, (response) => {
                    console.log(response)
                })
            })
        }
    }
}
</script>
