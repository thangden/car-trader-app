import { connectDB, sql } from '../connectDB';

// companyId: 0
// jobTypeId: 0
// strStatusId: 5
// strTagId:
// cityId: 0
// roleId: 0
// salaryFrom: 0
// salaryTo: 0
// urgent: -1
// haveBonusInterview: false
// keyword:
// keywordType: 0
// sorting: index%20desc

export interface JobsQueryParams {
	companyId?: number;
	jobTypeId?: number;
	strStatusId?: number;
	strTagId?: number[];
	cityId?: number;
	roleId?: number;
	salaryFrom?: number;
	salaryTo?: number;
	urgent?: boolean;
	haveBonusInterview?: false;
	keyword?: string;
	sorting?: string;
	pageIndex?: number;
	pageSize?: number;
}

export async function getJobs({
	sorting,
	pageIndex,
	pageSize,
}: JobsQueryParams) {
	const pool = await connectDB();
	const data = await pool
		.request()
		.input('sorting', sql.Text, sorting)
		.input('pageIndex', sql.Int, pageIndex)
		.input('pageSize', sql.Int, pageSize).query(`
		SELECT [id]
        ,[name]
        ,[code]
        ,[hashCode]
        ,[numberRecruitment]
        ,[salaryFrom]
        ,[salaryTo]
        ,[jobDescription]
        ,[jobRequirement]
        ,[jDUpload]
        ,[whyWokingHere]
        ,[reportTo]
        ,[interviewingProcess]
        ,[rewardAmount]
        ,[bonusAmount]
        ,[bonusInterview]
        ,[createdDate]
        ,[updatedDate] FROM [RecruiteryV2].[dbo].[Job_Jobs]
ORDER BY [${sorting.split(' ')[0]}] ${
		sorting.split(' ')[1].toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
	}
OFFSET (@pageIndex-1)*@pageSize ROWS
FETCH NEXT @pageSize ROWS ONLY`);
	const jobs = [];
	for (let i = 0; i < data.rowsAffected[0]; i++) {
		jobs.push(data.recordset[i]);
	}
	pool.close();
	return jobs;
}
