import { connectDB, sql } from '../connectDB';

export async function getUser(code: string) {
	const pool = await connectDB();
	const data = await pool.request().input('code', sql.NVarChar, code || '')
		.query(`
		SELECT [id]
      ,[accountType]
      ,[code]
      ,[name]
      ,[firstName]
      ,[lastName]
      ,[address]
      ,[phone]
      ,[email]
      ,[avatar]
  FROM [RecruiteryV2].[dbo].[Sys_Account]
	WHERE [code] = @code`);

	pool.close();
	return data.recordset[0];
}
