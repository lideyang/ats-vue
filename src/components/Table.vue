<template>
    <div class='table-wrapper'>
        <el-table
            :data="source"
            :selection-mode="mode"
            :border="true"
            @selectionchange="onSelected">
            <slot></slot>
        </el-table>

        <el-pagination
            ref="pagination"
            class="mt30 text-center"
            layout="prev, pager, next,jumper"
            @currentchange="onPagination"
            :current-page="pageNo"
            :page-size="pageSize"
            :total="total">
        </el-pagination>
    </div>


</template>


<script>
    import {UN_PUBLISHED, HAVE_ACCEPTED, PUBLISHED} from '../constants/api'
    export default {
        name: 'WmTable',
        props: {
            source: Array,
            pageNo: {
                type: Number,
                default: 1
            },

            pageSize: {
                type: Number,
                default: 10
            },
            total: {
                type: Number,
                default: 0
            },
            mode: {
                type: String,
                default: "multiple"
            }
        },
        data () {
            return {
                statusItems: {
                    UN_PUBLISHED,
                    PUBLISHED,
                    HAVE_ACCEPTED
                }
            }
        },
        methods: {
            onSelected(params){
                this.$emit("onSelected", params)
            },

            onPagination(pageNo){
                this.$emit("onPagination", pageNo);
            }
        },
    }
</script>
