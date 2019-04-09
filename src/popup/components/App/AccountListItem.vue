<template>
    <div class="rounded shadow bg-white text-grey-dark mb-2">
        <div class="flex">
            <div class="px-3 py-3">
                <img v-lazy="iconURL" class="besticon"/>
            </div>
            <div class="flex-grow py-4">
                <div class="font-bold">
                    {{ account.Name }}
                </div>
                <div class="link">
                    {{ account.Url }}
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
    },
    computed: {
        iconURL(){
            let besticonURL = localStorage.getItem("apidomain") === ".io"
          ? "https://besticon.ciberprotector.io/icon?size=64..96..128&url="
          : "https://besticon.ciberprotector.com/icon?size=64..96..128&url="
            
            let hostname = null
            let match = this.account.Url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
            if (match != null && match.length > 2 && typeof match[2] === "string" && match[2].length > 0 ) {
                hostname = match[2]
            }

            return besticonURL + hostname
        }
    }
}
</script>

<style lang="scss" scoped>
    .besticon{
        width: 40px;
    }
</style>

